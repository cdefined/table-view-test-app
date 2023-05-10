import { useGetPostsQuery } from '../services/postsApi';
import { Spin, Table } from 'antd';

function PostsTable() {
  const { data, isError, isLoading } = useGetPostsQuery();
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
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
    {
      title: 'User',
      dataIndex: 'userId',
      key: 'userId',
    },
  ];

  return (
    <>
      <div>
        {isLoading && <Spin />}
        {isError && 'Error'}
        {data && <Table dataSource={data} columns={columns} rowKey="id"/>}
      </div>
    </>
  );
}

export default PostsTable;
