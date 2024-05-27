"use client"
import withAuth from '../utils/withAuth';

const TesTPage = () => {
  return <div>Protected content</div>;
};

export default withAuth(TesTPage);
