import { profileContent, profileName } from '../StringData';

function CEOProfile() {
    return (
        <div className='profile-container'>
            <div className='profile-img'>
                <h4 className='profile-name'>{profileName}</h4>
                <img src='../img/sefa-profile_75_edit.png' className='profile-img' alt='asami-sefa' />
            </div>

            <div className='profile'>
                <h6 className='display-enter'>{profileContent}</h6>
            </div>
        </div>
    )
}

export { CEOProfile };