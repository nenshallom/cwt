import React from 'react';
import PropTypes from 'prop-types';

type SkillProgressProps = {
  skill: string;
  progress: number;
};

const SkillProgress: React.FC<SkillProgressProps> = ({ skill, progress }) => {
  return (
    <div className="w-full lg:w-[300px]">
      <h3 className="text-sm font-syne text-[16px] font">{skill}</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#121820] font-sora text-[13px]">
              {progress}%
            </span>
          </div>
        </div>
        <div className="flex h-[2px] mb-4 overflow-hidden text-xs  rounded-full bg-[#12182033]">
          <div
            style={{ width: `${progress}%` }}
            className="flex flex-col justify-center text-center  whitespace-nowrap bg-[#92519c] shadow-none transition-all duration-300"
          >
          </div>
        </div>
      </div>
    </div>
  );
};

SkillProgress.propTypes = {
  skill: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default SkillProgress;
