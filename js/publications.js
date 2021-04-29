const pubThumbs = document.querySelectorAll(".thumbnail")
        const pubTitles = document.querySelectorAll(".title")
        const nPubs = pubThumbs.length

        for (i = 0; i < nPubs; i++) {
            let startTheta = 30;
            let startX = 0;
            pubThumbs[i].style.transform = `rotate(${startTheta - (i * 20)}deg) scale(0.35) translateX(${startX - i * 75}px)`;
            pubThumbs[i].style.zIndex = i * 10;
        };

        pubTitles.forEach(item => {
            let tempLoc = 0;
            let tempTransform = 0;
            let tempZ = 0;

            item.addEventListener('mouseover', event => {
                pubThumbs.forEach(element => {
                    if (element.classList[1] == item.classList[1]) {
                        tempTransform = getComputedStyle(element).getPropertyValue('transform');
                        tempZ = getComputedStyle(element).getPropertyValue('z-index');
                        element.style.transform = `rotate(0deg) scale(0.6) translateX(-60px)`;
                        element.style.zIndex = 1000;
                        item.style.transform = 'scale(1.05)';
                        tempLoc = element;
                    }
                });
            });

            item.addEventListener('mouseout', event => {
                tempLoc.style.transform = tempTransform;
                tempLoc.style.zIndex = tempZ;
                item.style.transform = 'scale(1)';
            });
        });