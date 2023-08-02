import React, {Fragment, ReactNode} from 'react';

import {makeArray} from "../../../utils/funcs";

import styles from '././List.module.sass';

interface IListProps {
    data: any;
    limit?: number;
    renderItem: any;
    loadingComponent?: ReactNode;
}

const List = (props: IListProps) => {
    const {data, limit = 5, loadingComponent = <div />, renderItem} = props;

    const RenderItem = renderItem;

    if (data?.length === 0) {
        return <h2>No results</h2>
    }

    return (
        <div className={styles.list}>
            {!data && makeArray(limit).map((item: number) => (
                <Fragment key={item}>
                    {loadingComponent}
                </Fragment>
            ))}

            {data?.map((item: any) => (
                    <RenderItem {...item} />
                )
            )}
        </div>
    );
};

export default List;
