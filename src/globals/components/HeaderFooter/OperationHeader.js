import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  Image,
} from 'semantic-ui-react';
import styles from './HeaderAndFooter.module.less';

const OperationHeader = (props) => {
  const {
    children = [],
  } = props;

  // const history = useHistory();
  const leftWrapper = children[0] ? children[0] : children;
  // const rightWrapper = children[1];

  return (
    <div className={styles.rotaract_header}>
      <div>
        <Image
          src="https://www.nicepng.com/png/full/380-3802815_rotaract-logo-png.png"
        // onClick={() => handleNavigation('/')}
        />
        <div>
          <h2>ROTARACT DISTRICT ORGANISATION 2024-25</h2>
          <h4>ROTARY INTERNATIONAL DISTRICT 3000</h4>
        </div>
        <Image
          src="https://www.nicepng.com/png/full/380-3802815_rotaract-logo-png.png"
        // onClick={() => handleNavigation('/')}
        />
      </div>

      <div>
        {leftWrapper}
        {/* <div>
            {rightWrapper}
          </div> */}
      </div>
      {/* )} */}
    </div>
  );
};

export default withTranslation('common')(OperationHeader);
