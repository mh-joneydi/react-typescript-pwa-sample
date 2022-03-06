import { closeLightBox, ILightBoxState } from 'features/imageLightBox/imageLightBoxSlice';
import React from 'react';
import Lightbox from 'react-image-lightbox';
import { useAppDispatch, useAppSelector } from 'store';

const ImageLightBox: React.FC = () => {

    const slicePack = useAppSelector( state=> state.globalLightBox ),
    [open, setOpen] = React.useState<boolean>(false),
    [lightBoxInfo, setLightBoxInfo] = React.useState<ILightBoxState|undefined>(),
    dispatch = useAppDispatch(),
    handleClose = () => {
        setOpen(false);
        setTimeout(() => setLightBoxInfo(undefined), lightBoxInfo?.options?.animationDuration || 300)
    };

    React.useEffect(() => {
        if (slicePack.length && !lightBoxInfo) {
            setLightBoxInfo({ ...slicePack[0] });
          dispatch(closeLightBox());
          setOpen(true);
        } else if (slicePack.length && lightBoxInfo && open) {
          setOpen(false);
        }
      }, [lightBoxInfo, slicePack, open, dispatch]);

    React.useEffect( ()=> {
        open
        ? document.body.style.overflow = 'hidden'
        : document.body.removeAttribute('style')      
    }, [open]);

    return ( open && lightBoxInfo )
    ? (
        <Lightbox     
          mainSrc={lightBoxInfo.images[lightBoxInfo.currentIndex!]}
          nextSrc={lightBoxInfo.images.length > 1 ? lightBoxInfo.images[(lightBoxInfo.currentIndex! + 1) % lightBoxInfo.images.length] : undefined}
          prevSrc={lightBoxInfo.images.length > 1 ? lightBoxInfo.images[(lightBoxInfo.currentIndex! + lightBoxInfo.images.length - 1) % lightBoxInfo.images.length] : undefined}
          onMovePrevRequest={() => setLightBoxInfo( lastVal=> ({...lastVal!, currentIndex: (lastVal!.currentIndex! + lastVal!.images.length - 1) % lastVal!.images.length }) )}
          onMoveNextRequest={() => setLightBoxInfo( lastVal=> ({...lastVal!, currentIndex: (lastVal!.currentIndex! + 1) % lastVal!.images.length }) )}
          onCloseRequest={handleClose}
        />
     )
     : null;
};

export default ImageLightBox;
