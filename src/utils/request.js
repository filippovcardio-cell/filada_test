import { useDispatch } from "react-redux";
import { setIsActive, setIsFormSended } from "../redux/ModalSlice/ModalSlice";

export const useTelegramMessage = () => {
  const dispatch = useDispatch();

  const sendTelegramMessage = async (message) => {
    const TELEGRAM_BOT_TOKEN = '8267344423:AAFFxQwFpGstTcy_9fW7o9pM6bzLyMVluBY';
    const TELEGRAM_CHAT_ID = '-1002721332013';
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message.message,
        }),
      });

      if (response.ok) {
        dispatch(setIsFormSended(true));
        dispatch(setIsActive())
      } else {
        // dispatch(setIsFormFailed(true));
      }
    } catch (error) {
      // dispatch(setIsFormFailed(true));
    }
  };

  return { sendTelegramMessage };
};
