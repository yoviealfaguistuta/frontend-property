const TableShimmer = () => {
    return (
        <div className="w-100">
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_: any, index: number) => {
                    return (
                        <div className="row w-100" key={index}>
                            <div className="col-md-3 mb-3">
                                <div className="animate-pulse" style={{ height: 30, width: '100%', borderRadius: 7 }}>
                                    <div className="animate" style={{ height: 30, width: '100%', borderRadius: 7 }}></div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="animate-pulse" style={{ height: 30, width: '100%', borderRadius: 7 }}>
                                    <div className="animate" style={{ height: 30, width: '100%', borderRadius: 7 }}></div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="animate-pulse" style={{ height: 30, width: '100%', borderRadius: 7 }}>
                                    <div className="animate" style={{ height: 30, width: '100%', borderRadius: 7 }}></div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <div className="animate-pulse" style={{ height: 30, width: '100%', borderRadius: 7 }}>
                                    <div className="animate" style={{ height: 30, width: '100%', borderRadius: 7 }}></div>
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }

        </div>
    )
};
export default TableShimmer;