export { integrationsAccountCards };

export const UUID = () => (Math.random() + 1).toString(36).substring(2);

export const AddUniqueID = (Arr: any[], lable: string) =>
  Arr.map((d: any) => {
    return {
      ...d,
      [lable]: UUID(),
    };
  });

const integrationsAccountCards = AddUniqueID(
  [
    {
      title: "Connect With Quickbooks Online",
      description:
        "QuickBooks Online is a cloud-based accounting software that simplifies financial management for businesses.",
      buttonText: "Connect",
      logo: `/assets/images/Quickbooks-Online.png`,
      ghost: false,
      select: false,
      type: "Accounting",
      connect: false,
      titleKey: "QuickbooksOnline",
    },
    {
      title: "Connect With Xero",
      description:
        "Xero is an easy-to-use online accounting software designed for small businesses and their advisors.",
      buttonText: "Connect",
      logo: `/assets/images/xero.png`,
      ghost: false,
      select: false,
      type: "Accounting",
      connect: false,
      titleKey: "Xero",
    },
  ],
  "id"
);
