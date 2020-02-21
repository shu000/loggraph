export const ON_CLOSE_FEEDBACK = 'ON_CLOSE_FEEDBACK';

// uiステートか？
export const onCloseFeedback = () => ({
  type: ON_CLOSE_FEEDBACK as typeof ON_CLOSE_FEEDBACK,
});

export type AppAction = ReturnType<typeof onCloseFeedback>;
