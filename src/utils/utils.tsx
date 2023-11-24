import toast from "react-hot-toast";

export const toastText = (message: string, type: string) => {
  console.log('inside toast text');

  const commonStyle = {
    style: {
      fontSize: "16px",
    },
  };

  switch (type) {
    case "success":
      toast.success(message, commonStyle);
      break;

    case "error":
      toast.error(message, commonStyle);
      break;
  }
};
