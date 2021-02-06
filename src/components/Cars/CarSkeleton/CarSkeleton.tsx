import './CarSkeleton.css';

const CarsSkeleton = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => {
        return (
          <li className='CarSkeleton-container Animate' key={i}>
            <div className='CarSkeleton-image' />

            <section>
              <div className='CarSkeleton-name' />
              <div className='CarSkeleton-meta' />
              <div className='CarSkeleton-link' />
            </section>
          </li>
        )
      })}
    </>
  );
};

export default CarsSkeleton;
