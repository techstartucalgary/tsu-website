import CircularProgress from '@mui/material/CircularProgress';

const Loading = () =>{

    return(
        <div style={{color:'white', textAlign:'center'}}>
            <CircularProgress size={70} color="success" />
        </div>
    );
};
export default Loading;