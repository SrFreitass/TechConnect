import { styled } from "styled-components";

export const StyledLoader = styled.div`        
        width:50px;
        height:50px;
        --c:radial-gradient(farthest-side,#766DF4 92%,#0000);
        background: 
            var(--c) 50% 0,
            var(--c) 50% 100%,
            var(--c) 100% 50%,
            var(--c) 0    50%;
            background-size:12px 12px;
            background-repeat:no-repeat;
            animation:s7 1s infinite;
            position: absolute;
            top: 50%;
            left: 50%;
            
    @keyframes s7 {to{transform: rotate(.5turn)}}

`