import React, { Component } from 'react'
import Coverflow from 'react-coverflow';

export class CoverFlow extends Component {
    render() {
        return (
            <div className="CoverFlow">
                <Coverflow width="320" height="200" background-color="white"
                    displayQuantityOfSide={2}
                    navigation={false}
                    enableScroll={true}
                    clickable={true}
                    active={0}
                >
                    <div
                        // onClick={() => fn()}
                        // onKeyDown={() => fn()}
                        role="menuitem"
                        tabIndex="0"
                    >
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Imagine-Dragons-press-photo-credit-Eliot-Lee-Hazel-2017-a-billboard-1548.jpg'
                            alt='title or description'
                            style={{
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                    <img src='https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png'

                        style={{
                            display: 'block',
                            width: '100%',
                        }}
                    />
                    <img src='https://i.ytimg.com/vi/gyBQew7B9C8/maxresdefault.jpg'

                    />
                    <img src='https://upload.wikimedia.org/wikipedia/en/3/3d/Coldplay_-_A_Head_Full_of_Dreams.png'

                    />
                    <img src='https://i.ytimg.com/vi/w5GrxfjuTTI/maxresdefault.jpg'

                    />
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Stoneyalbum.jpg/220px-Stoneyalbum.jpg'

                    />
                </Coverflow>,
            </div>
        )
    }
}

export default CoverFlow
