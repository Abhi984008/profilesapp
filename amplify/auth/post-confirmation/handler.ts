import type { PostConfirmationTriggerHandler } from 'aws-lambda';

export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log('Post confirmation trigger executed:', JSON.stringify(event, null, 2));
  return event;
};