import { useAppSelector } from '@/hooks/use-app-selector';
import { getMode } from '@/store/global/globalSlice';
import { Ayah, Mode } from '@/types';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import AyahText from './AyahText';

type Props = {
  currentAyah: number;
  ayahs: Ayah[];
};

const SurahPanel = ({ currentAyah, ayahs }: Props) => {
  const mode = useAppSelector(getMode);
  return (
    <OverlayScrollbarsComponent
      options={{ scrollbars: { autoHide: 'scroll' } }}
      style={{ height: `calc(100vh - ${mode === Mode.LISTENING ? '27rem' : '18rem'})` }}
    >
      {ayahs.map((ayah, index) => {
        return <AyahText key={index} ayah={ayah} active={currentAyah === ayah.numberInSurah} />;
      })}
    </OverlayScrollbarsComponent>
  );
};

export default SurahPanel;
