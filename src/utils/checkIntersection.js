export const checkIntersection = (element1, element2) => {
  const elem1InElem2XR =
    element2.pointLT.x <= element1.pointRT.x &&
    element1.pointRT.x <= element2.pointRT.x;

  const elem1InElem2XL =
    element2.pointLT.x <= element1.pointLT.x &&
    element1.pointLT.x <= element2.pointRT.x;

  const elem1InElem2YB =
    element2.pointLB.y <= element1.pointLB.y &&
    element1.pointLB.y <= element2.pointLT.y;

  if (
    (elem1InElem2XR && elem1InElem2YB) ||
    (elem1InElem2XL && elem1InElem2YB)
  ) {
    return true;
  }
  return false;
};
