import { useGetPostsQuery } from '../services/postsApi';
import { Alert, Spin, Table } from 'antd';

function PostsTable() {
  const { data, isError, error, isLoading } = useGetPostsQuery();
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'User',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body',
    },
  ];

  return (
    <>
      <div>
        {isLoading && <Spin />}
        {isError && <Alert message={error.error} type="error" />}
        {data && <Table dataSource={data} columns={columns} rowKey="id" />}
      </div>
    </>
  );
}

export default PostsTable;
