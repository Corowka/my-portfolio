import { Bounce, toast } from "react-toastify";

export const sendNotification = async (text: string) => {
  await toast(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
