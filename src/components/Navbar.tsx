import * as React from 'react';

class Navbar extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
        };

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="/">{this.props.title}</a>
                </nav>
            </div>
        )
    }
}

interface IProps {
    title: string;
}
export default Navbar;