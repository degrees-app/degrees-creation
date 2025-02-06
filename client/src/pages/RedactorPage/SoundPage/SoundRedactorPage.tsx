import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Dropdown, Form } from 'react-bootstrap';
import SoundCard from '../../../entities/sound/ui/SoundCard';
import { useGetSoundsQuery } from '../../../entities/sound/api/sound';
import { useGetCategoriesQuery } from '../../../entities/categories/api/category';
import style from '../../RedactorPage/SoundRedactorPage/SoundPageStyle.module.scss';
import { SoundType } from '../../../entities/sound/types/soundTypes';
import { useSoundContext } from '../../SoundContextPage/SoundContextPage';
import SelectedSoundCard from '../SelectedSoundCard/SelectedSoundCard';

export default function SoundRedactorPage(): React.JSX.Element {
  const navigate = useNavigate();
  const { data: sounds, isSuccess: soundsSuccess } = useGetSoundsQuery(undefined);
  const { data: categories, isSuccess: categoriesSuccess } =
    useGetCategoriesQuery(undefined);
  const { selectedSounds, setSelectedSounds } = useSoundContext();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSelectedSounds, setCurrentSelectedSounds] = useState<SoundType[]>([]);

  if (!soundsSuccess || !categoriesSuccess) {
    return <>Loading...</>;
  }

  const filteredSounds = selectedCategory
    ? sounds.filter((sound) => sound.categoryId === selectedCategory.id)
    : sounds;

  const handleSoundSelect = (sound: SoundType) => {
    if (currentSelectedSounds.some((s) => s.id === sound.id)) {
      setCurrentSelectedSounds(currentSelectedSounds.filter((s) => s.id !== sound.id));
    } else if (currentSelectedSounds.length < 3) {
      setCurrentSelectedSounds([...currentSelectedSounds, sound]);
    } else {
      alert('В одной карточке может быть не больше 3 звуков.');
    }
  };

  const handleAddSounds = () => {
    const uniqueSelectedSounds = [
      ...new Set([...selectedSounds, ...currentSelectedSounds]),
    ];
    setSelectedSounds(uniqueSelectedSounds);
    setCurrentSelectedSounds([]);
    navigate('/skins/sound');
  };

  const hasSelectedCategory = selectedCategory !== null;

  return (
    <div className={style.container}>
      <Dropdown className={style.container2}>
        <Dropdown.Toggle className={style.dropdownToggle}>
          {selectedCategory ? selectedCategory.name : 'selected category'}
        </Dropdown.Toggle>

        <Dropdown.Menu className={style.dropdownMenu}>
          {categories.map((category) => (
            <Dropdown.Item
              key={category.id}
              className={`${style.dropdownItem} ${
                selectedCategory?.id === category.id ? style.selected : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div className={style.container3}>
        {hasSelectedCategory ? (
          filteredSounds.length > 0 ? (
            filteredSounds.map((sound) => (
              <div key={sound.id} className={style.soundItem}>
                <div className={style.soundCardContainer}>
                  <SoundCard sound={sound} />
                  <Form.Check
                    type="checkbox"
                    checked={currentSelectedSounds.some((s) => s.id === sound.id)}
                    onChange={() => handleSoundSelect(sound)}
                    className={style.checkbox}
                  />
                </div>
              </div>
            ))
          ) : (
            <Col>
              <div style={{ color: 'white' }}>Нет доступных звуков в этой категории.</div>
            </Col>
          )
        ) : (
          <Col>
            <div style={{ color: 'white' }}>please, selected category.</div>
          </Col>
        )}
      </div>

      {currentSelectedSounds.length > 0 && (
        <div>
          <div
            className={currentSelectedSounds.length > 1 ? style.scrollableContainer : ''}
          >
            {currentSelectedSounds.map((sound) => (
              <SelectedSoundCard
                key={sound.id}
                selectedSounds={[sound]}
                onRemoveSound={(soundId) =>
                  setCurrentSelectedSounds(
                    currentSelectedSounds.filter((s) => s.id !== soundId),
                  )
                }
              />
            ))}
          </div>
        </div>
      )}
      <button className={style.button} onClick={handleAddSounds}>
       add.
      </button>
    </div>
  );
}
