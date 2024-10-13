import { Loader } from "@mantine/core";

const CustomLoader = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="loader-container">
            <Loader color="blue" />
        </div>
    )
}

export default CustomLoader;