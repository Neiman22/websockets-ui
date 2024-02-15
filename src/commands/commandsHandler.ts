export const commandsHandler = (message: string): string => {
  let response;

  try {
    const parsedMessage = JSON.parse(message);

    switch(parsedMessage.type) {
      case 'reg':
        response = {
          type: 'reg',
          data: JSON.stringify ({
            name: JSON.parse(parsedMessage.data).name,
            index: 0,
            error: false,
            errorText: '',
          }),
          id: 0,
        }
      break;
      default:
        console.log('Unknown message type:', parsedMessage.type);
      break;
    }
  } catch (error) {
    console.error('Error parsing message:', error);
  }

  return JSON.stringify(response);
}

