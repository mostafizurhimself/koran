import { Ayah } from '@/types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import AyahText from './AyahText';

type Props = {
  currentAyah: number;
  ayahs: Ayah[];
};

const SurahPanel = ({ currentAyah, ayahs }: Props) => {
  return (
    // <OverlayScrollbarsComponent options={{ scrollbars: { autoHide: 'scroll' } }} style={{ maxHeight: '500px' }}>
    //   {ayahs.map((ayah, index) => {
    //     return <AyahText key={index} ayah={ayah} active={currentAyah === ayah.numberInSurah} />;
    //   })}
    // </OverlayScrollbarsComponent>
    <div className="h-[500px] overflow-auto">
      {ayahs.map((ayah, index) => {
        return <AyahText key={index} ayah={ayah} active={currentAyah === ayah.numberInSurah} />;
      })}
    </div>
  );
};

export default SurahPanel;
