import Table from "elements/Table";

const INF_DevToolsUser: React.FC<any> = (props) => {
  const { activeTab } = props;
  return (
    <div>
      <Table activeTab={activeTab} />
    </div>
  );
};

export default INF_DevToolsUser;
