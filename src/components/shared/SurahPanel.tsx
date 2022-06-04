import { Ayah } from '@/types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import AyahText from './AyahText';

type Props = {
  currentAyah: number;
  ayahs: Ayah[];
};

const SurahPanel = ({ currentAyah, ayahs }: Props) => {
  return (
    <>
      <OverlayScrollbarsComponent
        options={{ scrollbars: { autoHide: 'scroll' } }}
        style={{ height: 'calc(100vh - 45vh)' }}
      >
        {ayahs.map((ayah, index) => {
          return <AyahText key={index} ayah={ayah} active={currentAyah === ayah.numberInSurah} />;
        })}
      </OverlayScrollbarsComponent>
      {/* <div className="h-[40vh] overflow-auto">
        {ayahs.map((ayah, index) => {
          return <AyahText key={index} ayah={ayah} active={currentAyah === ayah.numberInSurah} />;
        })}
      </div> */}
    </>
  );
};

export default SurahPanel;
