import {FC} from 'react';

type Props = {
  width?: number;
  height?: number;
  onClick?: () => void;
};

export const SearchIcon: FC<Props> = ({width = 20, height = 20, onClick}) => {
  return (
    <svg
      onClick={onClick}
      className="cursor-pointer"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </svg>
  );
};

export const StarIcon: FC<Props> = ({width = 16, height = 16, onClick}) => {
  return (
    <svg
      onClick={onClick}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="#fbbf24"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#fbbf24"
      className="size-6">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};
