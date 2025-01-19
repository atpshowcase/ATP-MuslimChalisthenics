import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FundCards from "./FundCards";
import SectionTitle from "./SectionTitle";

export default function FundsTabs() {
  return (
    <Tabs className="sm:mt-0 mt-14">
      <div className="flex items-center sm:justify-between justify-center flex-wrap my-8">
        <SectionTitle title="Community Highlights" />
      </div>
      <TabPanel>
        <FundCards />
      </TabPanel>
    </Tabs>
  );
}
