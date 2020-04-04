import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import AnalyticsData from '../constants/analyticsData';
import ParsedData from '../constants/parsedData';
import Date from './date';

export interface GraphProps {
  parsed?: ParsedData;
  onReadJson: (data: AnalyticsData) => void;
}

const useStyles = makeStyles({
  graph: {
    padding: '30px 10px 10px 10px',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  dragOver: {
    backgroundColor: '#c0c0c0',
  },
});

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
            reject(new Error('jsonファイルではないようです'));
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

const Graph: FC<GraphProps> = ({
  parsed = { dates: [] },
  onReadJson = () => {},
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const classes = useStyles();

  return (
    <div
      className={`${classes.graph} ${isDragOver ? classes.dragOver : ''}`}
      onDragEnter={cancelEvent}
      onDragOver={event => {
        cancelEvent(event);
        if (!isDragOver) setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={event => {
        setIsDragOver(false);
        onDrop(event)
          .then(data => {
            onReadJson(data);
          })
          .catch(error => {
            setErrorMessage(error.message);
          });
      }}
    >
      {parsed.dates.map((date, i) => (
        <Date key={i.toString()} date={date} />
      ))}
      <Snackbar
        open={errorMessage !== ''}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        autoHideDuration={2000}
        onClose={() => setErrorMessage('')}
      >
        <Alert severity="error">{errorMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default Graph;
