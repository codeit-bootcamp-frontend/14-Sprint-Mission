import React, { useCallback, useState } from 'react';
import ProdListAll from './ProdListAll';
import LoadingBox from 'components/LoadingBox';

function BestItems({
  items,
  screenType,
  loading,
  VISIBLE_ITEMS_BEST
}) {


  return (
    <>
      {loading ? (
        <LoadingBox />
      ) : (
        <ProdListAll
          itemsData = {items}
          pageColumn={VISIBLE_ITEMS_BEST.column[screenType]}
        />
      )}
    </>
  );
}

export default BestItems;
