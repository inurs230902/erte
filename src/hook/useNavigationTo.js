import { useNavigate } from 'react-router-dom';

export const useNavigateTo = () => {
  const navigate = useNavigate();

  const goTo = (url, state) => navigate(url, { state });

  const goBack = (stack) => navigate(stack ?? -1);

  const goReplace = (url, state) => navigate(url, { state, replace: true });

  return { goTo, goBack, goReplace };
};
