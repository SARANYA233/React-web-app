import React from "react";

export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        person: null
    };

    async componentDidMount() {
        const  url = "https://dry-bayou-99944.herokuapp.com/profiles";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data[0], loading: false });
    }

    render() {
        if (this.state.loading) {
            return (
                <>
                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-3"></div>
                      <div className="col-6 text-center" id="outbox">
                      
                      </div>
                    </div>
                  </div>
                </>
              );
        }
        if (!this.state.person) {
            return (
                <>
                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-3"></div>
                      <div className="col-6 text-center" id="outbox">
                      <h3>No Data To Show</h3>
                      </div>
                    </div>
                  </div>
                </>
              );
        }
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-6" id="outbox">
                            <div className="row"><div className="col-4 mt-3"><p id="namep">{this.state.person.name}</p></div> <div className="col-4"></div><div className="col mt-3"><p id="phonep">{this.state.person.contact}</p></div></div>
                            <div className="row"><div className="col"><p id="mailp">{this.state.person.email}</p></div></div>
                            <div className="row"><div className="col mt-3 mb-3"><p id="addp">{this.state.person.address}</p></div></div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}