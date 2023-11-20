import React from 'react';

function Display() {
    return (
        <div>
            <h1>hello there</h1>
            <h2>welcome</h2>
        </div>
    );
}
function Ns1() {
    return (
        <div>
            <h1>NS1</h1>

        </div>
    );
}
function Ns2() {
    return (
        <div>
            <h1>NS2</h1>

        </div>
    );
}
export default function Disp() {

    return (
        <div>
            <Display />
            <Ns1 />
            <Ns2 />
        </div>

    );

}
