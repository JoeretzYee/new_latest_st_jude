import React from "react";
import CreateSecretaryAccount from "./CreateSecretaryAccount";
import ManageSecretary from "./ManageSecretary";

function CreateSecretaryAccountContainer() {
    return (
        <div>
            <div className='content-wrapper'>
                <section className='content'>
                    <div className='container-fluid'>
                        <div className='row mb-2'></div>
                        {/* Main row */}
                        <div className='row home__mainRow'>
                            {/* Left col */}
                            <section className='col-lg-6 connectedSortable'>
                                <CreateSecretaryAccount />
                            </section>
                            <section className='col-lg-6 connectedSortable'>
                                <ManageSecretary />
                            </section>
                            {/* /.Left col */}
                            {/* right col (We are only adding the ID to make the widgets sortable)*/}

                            {/* right col */}
                        </div>
                        {/* /.row (main row) */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
        </div>
    );
}

export default CreateSecretaryAccountContainer;
