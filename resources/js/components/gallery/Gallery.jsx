import React, { Component } from "react";
import axios from "axios";
import Loader from "../Loader";
import Image from "./Image";
import ImageModal from "./ImageModal";
import NoImages from "./NoImages";

class Gallery extends Component {
    state = {
        imageData: [
            {
                url: "",
                likes: 0
            }
        ],
        loading: true,
        imagesRendered: 0,
        error: false,
        modal: null
    };

    componentDidMount = () => {
        let { tab } = this.props;
        this.loadAllImages(tab);
    };

    componentDidUpdate = (prevProps) => {
        let { tab } = this.props;
        if (prevProps.tab !== tab){
            this.loadAllImages(tab);
        }
    }

    loadAllImages=(tab)=>{
        axios
            .get(`../api/getImages/${tab}`)
            .then(res => {
                let imageData = res.data;
                this.setState({
                    imageData,
                    loading: false,
                    imagesRendered:0,
                });
            })
            .catch(err => {
                console.log(err),
                    this.setState({
                        error: true
                    });
            });
    }

    imageLoad = () => {
        this.setState(prevState => {
            return { imagesRendered: prevState.imagesRendered + 1 };
        });
    };

    setModal = modal => {
        this.setState({
            modal
        });
    };

    changeLikes = (direction, index) => {
        let { imageData } = this.state;
        let updatedImageData = [...imageData];
        direction === "up"
            ? (updatedImageData[index].likes = imageData[index].likes + 1)
            : (updatedImageData[index].likes = imageData[index].likes - 1);
        this.setState({
            imageData: updatedImageData
        });
    };

    render() {
        let { imageData, loading, modal, imagesRendered, error } = this.state;
        let { setModal, imageLoad, changeLikes } = this;
        return (
            <React.Fragment>
                {error && <Error />}
                {typeof modal === "number" && (
                    <ImageModal
                        image={imageData[modal]}
                        setModal={setModal}
                        changeLikes={changeLikes}
                        index={modal}
                    />
                )}
                <div style={{ display: loading ? "block" : "none" }}>
                    <Loader />
                </div>
                {!loading && imageData.length===0 && <NoImages />}
                <div
                    className="grid"
                    style={{
                        display:
                            !loading && imagesRendered === imageData.length
                                ? "grid"
                                : "none"
                    }}
                >
                    {imageData.map((image, index) => (
                        <Image
                            key={image.url}
                            image={image}
                            setModal={setModal}
                            index={index}
                            imageLoad={imageLoad}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Gallery;
