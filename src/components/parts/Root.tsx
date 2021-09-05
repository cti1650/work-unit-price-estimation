/* eslint-disable tailwindcss/no-custom-classname */
import type React from 'next';
import { useCallback, useState } from 'react';

type RootType = {
  basePrice: number,
  baseCount: number,
  defTime: number
}

const Root = (props: RootType) => {
  const { basePrice, baseCount, defTime } = props;
  const [time, setTime] = useState(defTime);
  const handleChangeTime = useCallback((e) => {
    setTime(e.target.value);
  }, [time])
  return (
    <div className="flex flex-col space-x-4 w-full">
      <div className="font-extrabold bg-gray-300 py-4 px-8 rounded-xl shadow">
        <div className="flex justify-between">
          <div>作業：タイヤ交換</div>
          <div>労務単価：{basePrice}円</div>
        </div>
        <div className="flex justify-between">
          <div>作業時間</div>
          <div className="form-control">
            <input
              type="number"
              value={time}
              onChange={handleChangeTime}
              placeholder="作業時間(分)"
              className="input input-sm input-bordered"
            ></input>
          </div>
        </div>
        <div className="flex justify-between max-w-xs">
          <div>回数</div> <div>一回</div>
          <div>回数を書くところ</div>
        </div>
        <div className="flex justify-between">
          <div className="max-w-md">
            <div className="flex justify-between items-center">
              <div>年間作業時間（分）：{time * baseCount}</div>
            </div>
            <div>年間想定額：{(time * baseCount) / 60 * basePrice}円</div>
          </div>
          <div className="">
            <button className="content-center p-10 btn btn-info">算出</button>
          </div>
        </div>

        <div>
          <div>備考</div>
          <div className="form-control">
            <textarea
              className="max-w-md h-24 textarea textarea-bordered textarea-accent"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>

        <div className='pt-2'>
          <ul>
            <li className='flex flex-row'>
              <p>関連リンク</p>
              <p><input
                type="text"
                placeholder="関連リンク"
                className="ml-4 w-full input input-sm input-info input-bordered"
              />
              </p>
            </li>
            <li>
              関連リンク
              <input
                type="text"
                placeholder="関連リンク"
                className="ml-4 input input-sm input-info input-bordered"
              />
            </li>
            <li>
              関連リンク
              <input
                type="text"
                placeholder="関連リンク"
                className="ml-4 input input-sm input-info input-bordered"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Root.defaultProps = {
  basePrice: 1000,
  baseCount: 1,
  defTime: 60
}

export default Root;
