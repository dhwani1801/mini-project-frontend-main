import { integrationsAccountCards } from "../../../utils/staticObjects";
import DynamicCategoryTable from "../../DynamicCategoryTable";

export const IntegrationCard = () => {

  return (
    <DynamicCategoryTable
      dataSource={integrationsAccountCards}
      type={integrationsAccountCards[0]?.type}
    />
  );
};
