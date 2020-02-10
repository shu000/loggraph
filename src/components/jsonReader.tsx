import React, { FC, useState } from 'react';
import AnalyticsData from '../constants/analyticsData';
import ParsedData from '../constants/parsedData';
import './jsonReader.scss';

export interface JsonReaderProps {
  parsed?: ParsedData;
  onRead?: (data: AnalyticsData) => void;
}

const cancelEvent = (e: React.DragEvent<HTMLDivElement>): boolean => {
  e.preventDefault();
  e.stopPropagation();
  return false;
};

const asyncReadFile = (file: File): Promise<AnalyticsData> =>
  new Promise(
    (
      resolve: (data: AnalyticsData) => void,
      reject: (error: Error) => void
    ) => {
      const reader: FileReader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>): void => {
        if (
          !e.target ||
          !e.target.result ||
          e.target.result instanceof ArrayBuffer
        ) {
          reject(new Error('ファイル読み込みに失敗しました'));
        } else {
          // TypeScriptが reject を解さないので(?)
          // else で括らないと e.target.result が nullable エラーになる
          try {
            const data: AnalyticsData = JSON.parse(e.target.result);
            resolve(data);
          } catch (error) {
            // JSON.parse() が失敗ならばjsonでない
            reject(new Error('jsonファイルを読ませてください'));
          }
        }
      };
      reader.readAsText(file);
    }
  );

const onDrop = (
  event: React.DragEvent<HTMLDivElement>
): Promise<AnalyticsData> => {
  event.preventDefault();
  // TODO: 複数ファイルの制御
  const file = event.dataTransfer.files[0];
  return asyncReadFile(file);
};

const JsonReader: FC<JsonReaderProps> = ({
  parsed = [],
  onRead = () => {},
}) => {
  const [message, setMessage] = useState('');

  return (
    <div className="JsonReader">
      <div
        className="JsonReader__droppable"
        onDragEnter={cancelEvent}
        onDragOver={cancelEvent}
        onDrop={event => {
          onDrop(event)
            .then(data => {
              setMessage('');
              onRead(data);
            })
            .catch(error => {
              setMessage(error.message);
            });
        }}
      >
        <p>Drop file here!</p>
      </div>
      <p className="JsonReader__message">{message}</p>
      <code>{JSON.stringify(parsed)}</code>
    </div>
  );
};

export default JsonReader;
