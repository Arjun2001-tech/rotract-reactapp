import React from 'react';
import ls from 'local-storage';
// import OperationHeader from './OperationHeader';
import OperationHeader from './OperationHeader';

function CommonHeader(props) {
  const segmentType = ls.get('segmentType');

  switch (segmentType) {
    // case 1:
    default:
      // return <DefaultHeader {...props} />;
      return <OperationHeader {...props} />;
  }
}

export default CommonHeader;
