/* eslint-disable tailwindcss/no-custom-classname */
import type React from 'next';

const Root = () => {
  return (
    <div className="flex flex-col space-x-4 max-w-screen-sm">
      <div className="font-extrabold bg-gray-500">
        <div className="flex justify-between">
          <div>作業：タイヤ交換</div>
          <div>労務単価：1000円</div>
        </div>
        <div className="flex justify-between">
          <div>作業時間</div>
          <div className="form-control">
            <input
              type="number"
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
              <div>年間作業時間（分）</div>
              <div>
                <input
                  type="number"
                  placeholder="作業時間(分)"
                  className="input input-sm input-bordered"
                ></input>
              </div>
            </div>
            <div>年間想定額：2000円</div>
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

        <div>
          <ul>
            <li>
              関連リンク
              <input
                type="text"
                placeholder="関連リンク"
                className="input input-sm input-info input-bordered"
              />
            </li>
            <li>
              関連リンク
              <input
                type="text"
                placeholder="関連リンク"
                className="input input-sm input-info input-bordered"
              />
            </li>
            <li>
              関連リンク
              <input
                type="text"
                placeholder="関連リンク"
                className="input input-sm input-info input-bordered"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Root;
