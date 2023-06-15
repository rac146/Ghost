import React from 'react';
import SettingGroup from '../../../admin-x-ds/settings/SettingGroup';
import SettingGroupContent from '../../../admin-x-ds/settings/SettingGroupContent';
import TextField from '../../../admin-x-ds/global/TextField';
import useSettingGroup from '../../../hooks/useSettingGroup';

const TitleAndDescription: React.FC = () => {
    const {
        currentState,
        focusRef,
        handleSave,
        handleCancel,
        updateSetting,
        getSettingValues,
        handleStateChange
    } = useSettingGroup();

    const [title, description] = getSettingValues(['title', 'description']) as string[];

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateSetting('title', e.target.value);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateSetting('description', e.target.value);
    };

    const values = (
        <SettingGroupContent
            columns={2}
            values={[
                {
                    heading: 'Site title',
                    key: 'site-title',
                    value: title
                },
                {
                    heading: 'Site description',
                    key: 'site-description',
                    value: description
                }
            ]}
        />
    );

    const inputFields = (
        <SettingGroupContent columns={2}>
            <TextField
                hint="The name of your site"
                inputRef={focusRef}
                placeholder="Site title"
                title="Site title"
                value={title}
                onChange={handleTitleChange}
            />
            <TextField
                hint="Used in your theme, meta data and search results"
                placeholder="Enter something"
                title="Site description"
                value={description}
                onChange={handleDescriptionChange}
            />
        </SettingGroupContent>
    );

    return (
        <SettingGroup
            description='The details used to identify your publication around the web'
            navid='title-and-description'
            state={currentState}
            title='Title & description'
            onCancel={handleCancel}
            onSave={handleSave}
            onStateChange={handleStateChange}
        >
            {currentState === 'view' ? values : inputFields }
        </SettingGroup>
    );
};

export default TitleAndDescription;