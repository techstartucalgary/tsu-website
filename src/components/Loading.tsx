import CircularProgress from '@mui/material/CircularProgress';

const Loading = () =>{

    return(
        <div style={{color:'white', textAlign:'center', minHeight:'100vh'}}>
            <CircularProgress size={70} color="success" />
        </div>
    );
};
export default Loading;