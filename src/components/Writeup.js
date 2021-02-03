import React from 'react'
import { useSpring, animated } from 'react-spring';

const Writeup = () => {
    const props = useSpring({
        opacity: 1,
        from: {opacity: 0},
    })

    return <animated.div className="font-thin text-xl mb-4" style={props}>
        Dignissim cras tincidunt lobortis feugiat. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan. Viverra orci sagittis eu volutpat odio facilisis mauris. Praesent tristique magna sit amet purus gravida quis blandit turpis. Tellus elementum sagittis vitae et leo duis. Eget nullam non nisi est sit amet facilisis. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Amet nisl suscipit adipiscing bibendum est ultricies integer. Sollicitudin ac orci phasellus egestas. Feugiat in fermentum posuere urna. Egestas erat imperdiet sed euismod nisi. Orci ac auctor augue mauris augue.
    </animated.div>
}

export default Writeup