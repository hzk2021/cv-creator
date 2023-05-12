import React, { ReactDOM } from 'react';

export class Footer extends React.Component {
    render() {
        return(
            <footer className="bg-white p-2 shadow dark:bg-gray-900 sticky top-[100vh] ">
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">hzk2021@GitHub</a>. All Rights Reserved.</span>
            </footer>
        );
    }
}

