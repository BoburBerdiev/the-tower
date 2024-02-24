import { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

const LightGalleryComponent = ({ name }) => {
    // const lightGalleryRef = useRef < LightGallery > null;
    const containerRef = useRef(null);
    const [galleryContainer, setGalleryContainer] = useState(null);

    const onInit = useCallback((detail) => {
        if (detail) {
            // lightGalleryRef.current = detail.instance;
            lightGalleryRef.current.openGallery();
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            setGalleryContainer('aaa');
        }
    }, []);

    return (
        <div className="">
            <div className='h-[800px]' ref={containerRef}></div>
            <div>
                <LightGallery
                    container={galleryContainer}
                    // onInit={onInit}  
                    plugins={[lgZoom, lgThumbnail]}
                    closable={false}
                    showMaximizeIcon={true}
                    slideDelay={400}
                    thumbWidth={130}
                    thumbHeight={'100px'}
                    thumbMargin={6}
                    appendSubHtmlTo={'.lg-item'}
                    dynamic={true}
                    dynamicEl={[
                      {
                          scr:'/image/IMG_5346-min.jpg',
                          thumbnailUrl:'/image/IMG_5346-min.jpg',
                      },
                      {
                          scr:'/image/IMG_5397-min.jpg',
                          thumbnailUrl:'/image/IMG_5397-min.jpg',
                      },
                      {
                          scr:'/image/IMG_5448-min.jpg',
                          thumbnailUrl:'/image/IMG_5448-min.jpg',
                      },
                      {
                          scr:'/image/IMG_5451-min.jpg',
                          thumbnailUrl:'/image/IMG_5451-min.jpg',
                      }
                  ]}
                    hash={false}
                    elementClassNames={'w-full h-[60%]'}
                ></LightGallery>
            </div>
        </div>
    );
};

export default LightGalleryComponent;
