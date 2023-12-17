import toast from "react-hot-toast";

export const toastText = (message: string, type: string) => {
  console.log("inside toast text");

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

export const checkPermission = (
  allPermissions: any,
  requiredPermission: any
) => {
  if (!allPermissions) {
    return false;
  }
  const permissionsList = allPermissions;
  const permission = permissionsList?.find(
    (singlePermission: any) =>
      singlePermission.permissionName === requiredPermission.permissionName
  );
  if (permission) {
    const permitted = requiredPermission.permission.some(
      (singlePermission: string) => permission[singlePermission]
    );
    return permitted || permission["all"];
  } else {
    return false;
  }
};
