/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useAtom } from 'jotai';
import AddStory from './AddStory';
import StoryBoardTag from './StoryBoardTag';
import atoms from '../../util/atoms';

function StoryBoard() {
  const [darkMode] = useAtom(atoms.darkMode);
  const [storiesArray] = useAtom(atoms.storiesArray);

  return (
    <div
      className={`${
        darkMode ? 'scrollbarDark' : 'scrollbarLight'
      } scrollbar mt-6 flex overflow-x-auto rounded-lg border border-stone-300 bg-white py-4 pl-4 dark:border-stone-700 dark:bg-[#1c1c1c]`}
    >
      <AddStory />
      {storiesArray.map((username, index) => (
        <StoryBoardTag username={username} key={username + index} />
      ))}
    </div>
  );
}

export default StoryBoard;
