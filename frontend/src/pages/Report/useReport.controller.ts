import { useQuery } from 'react-query';
import { getChartData, getProfiles } from '../../services/user.service';
import { ISelectCurrentValue, Option } from '../../components/Input/Select/types';
import { useState } from 'react';
import { IChartData } from '../../components/Chart/types';
import { useTheme } from 'styled-components';

export default function UseReportController() {
  const { colors: theme } = useTheme();

  const initialChartData: IChartData = {
    labels: ['Usuários Ativos', 'Usuários Inativos'],
    datasets: [
      {
        backgroundColor: [theme.success, theme.danger],
        data: [],
      },
    ],
  };

  const [profile, setProfile] = useState<ISelectCurrentValue | null>(null);
  const [options, setOptions] = useState<Option[]>([]);
  const [chartData, setChartData] = useState<IChartData>(initialChartData);

  useQuery(['profiles'], () => getProfiles(), {
    onSuccess: (dataSuccess) => {
      const data: Option[] = dataSuccess.data.map((item) => ({
        id: item.profile_id,
        value: item.profile_name,
      }));

      setOptions(data);
    },
  });

  useQuery(['chart', profile], () => getChartData(profile?.id), {
    onSuccess: (dataSuccess) => {
      let newData = initialChartData;
      newData.datasets[0].data = [dataSuccess.data.active, dataSuccess.data.inactive];

      setChartData(newData);
    },
  });

  return { profile, setProfile, options, chartData };
}
