import { Component } from "react";

class Welcome extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid" style={{backgroundImage: 'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fscrc.siu.edu%2F_common%2Fimages%2Fnew-images%2Frb3.jpg&f=1&nofb=1)'}}>
            <div class="container">
                <h1 class="display-4 text-white">Welcome to StriveBooks</h1>
                <p class="lead">We've got a wide selction of history books</p>
            </div>
            </div>
        )
    }
}

export default Welcome