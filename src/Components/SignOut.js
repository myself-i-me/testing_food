import React from 'react'
import { auth } from '../firebase.js'

function SignOut() {
    return (
        <div style={{
            width: '100%', top: 0, zIndex: '10', marginTop: '5px'
        }}>
            <button style={{ padding: '20px', fontSize: '15px', borderRadius: '0', fontWeight: '600' }} onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut
