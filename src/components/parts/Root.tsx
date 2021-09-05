/* eslint-disable tailwindcss/no-custom-classname */
import type React from 'next';
import { useCallback, useEffect, useState } from 'react';

type RootType = {
  workName: string,
  basePrice: number,
  baseCount: number,
  defTime: number,
  onChange: (val: any) => void,
}

const Root = (props: RootType) => {
  const { workName, basePrice, baseCount, defTime, onChange } = props;
  const [name, setName] = useState(workName);
  const [time, setTime] = useState(defTime);
  const [count, setCount] = useState(baseCount);
  const handleChangeName = useCallback((e) => {
    setName(e.target.value);
  }, [name])
  const handleChangeTime = useCallback((e) => {
    setTime(e.target.value);
  }, [time])
  const handleChangeCount = useCallback((e) => {
    setCount(e.target.value);
  }, [count])
  const sumTime = useCallback(() => {
    return time * count
  }, [time, count])
  const sumPrice = useCallback(() => {
    return (time * count) / 60 * basePrice
  }, [time, count, basePrice])
  const makeTime = useCallback(() => {
    const num = sumTime();
    const timeD = Math.floor(num / (24 * 60));
    const timeH = Math.floor(num % (24 * 60) / (60));
    const timeM = Math.floor(num % (24 * 60) % (60));
    const timeDMS = timeD + '日' + timeH + '時間' + timeM + '分';
    return timeDMS;
  }, [time, count])

  useEffect(() => {
    onChange({
      name: workName,
      base_price: basePrice,
      time: time,
      count: count,
      sum_time: sumTime(),
      sum_time_str: makeTime(),
      sum_price: sumPrice(),
    })
  }, [time, count])

  return (
    <div className="flex flex-col space-x-4 w-full">
      <div className="font-extrabold bg-gray-300 py-4 px-8 rounded-xl shadow space-y-2">
        <div className="flex md:flex-row flex-col justify-between">
          <div className='text-xl md:text-3xl w-full'>作業<input
            type="text"
            value={name}
            onChange={handleChangeName}
            placeholder="作業名"
            className="input input-bordered text-xl md:text-3xl w-full"
          ></input></div>
          <div className='flex-none w-40 text-right'>時給単価：{basePrice}円</div>
        </div>
        <div className="flex md:flex-row flex-col md:space-x-2 space-y-2 content-center md:items-center">
          <div className="flex md:flex-row flex-col justify-between content-center md:items-center">
            <div className='flex-none md:w-32'>作業時間(分)</div>
            <div className="w-full form-control">
              <input
                type="number"
                value={time}
                onChange={handleChangeTime}
                placeholder="作業時間(分)"
                className="input input-sm input-bordered"
              ></input>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between content-center md:items-center">
            <div className='flex-none md:w-32'>回数</div>
            <div className="w-full form-control">
              <input
                type="number"
                value={count}
                onChange={handleChangeCount}
                placeholder="累計回数"
                className="input input-sm input-bordered"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full text-lg md:text-2xl py-4">
            <div className="flex flex-col justify-between">
              <div><div>年間作業時間：</div><div className='pl-8'>{makeTime()}  ({sumTime()}分)</div></div>
              <div><div>年間想定額：</div><div className='pl-8'>{sumPrice().toLocaleString()}円</div></div>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <div>備考</div>
          <div className="form-control">
            <textarea
              className="w-full h-24 textarea textarea-bordered textarea-accent"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>

        <div className='pt-2'>
          <ul className='flex flex-col space-y-1'>
            {[null, null, null, null].map(() => {
              return <li className='flex flex-row space-x-4'>
                <p className='flex-none'>関連リンク</p>
                <p className='w-full'><input
                  type="text"
                  placeholder="関連リンク"
                  className="w-full input input-sm input-info input-bordered"
                />
                </p>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

Root.defaultProps = {
  workName: '',
  basePrice: 1000,
  baseCount: 1,
  defTime: 60,
  onChange: () => { }
}

export default Root;
